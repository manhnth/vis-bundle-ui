import * as React from 'react';
import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import s from './Carousel.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  slides: { backgroundColor: string; content: React.ReactNode[] }[];
  carouselContainerStyle: ClassZone;
  carouselWrapperStyle: ClassZone;
  carouselContentWrapperStyle: ClassZone;
  carouselContentStyle: ClassZone;
  carouselItemStyle: ClassZone;
  backgroundMaskStyle: ClassZone;
}

let defaultProps = {};

interface State {
  currentSlide: number;
  prevSlide: number;
  hidden: boolean;
}

export class Carousel extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      prevSlide: 1,
      hidden: false,
    };
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    if (this.state.currentSlide === -1) {
      setTimeout(() => {
        this.setState({
          prevSlide: this.state.currentSlide,
          currentSlide: this.props.slides.length - 1,
        });
      }, 500);
    }
    if (this.state.currentSlide === this.props.slides.length) {
      setTimeout(() => {
        this.setState({
          prevSlide: this.state.currentSlide,
          currentSlide: 0,
        });
      }, 500);
    }
  }

  componentDidMount() {
    this.props.app.registerHooks(this.hooks);
  }

  componentWillUnmount() {
    this.hooks.forEach((hook) => {
      this.props.app.deregisterHooks(hook);
    });
  }

  private hooks = [
    {
      id: this.props.id,
      name: 'hide',
      func: () => {
        this.setState({ hidden: true });
      },
    },
    {
      id: this.props.id,
      name: 'show',
      func: () => {
        this.setState({ hidden: false });
      },
    },
    {
      id: this.props.id,
      name: 'nextSlide',
      func: () => {
        this.state.currentSlide <= this.props.slides.length - 1 &&
          this.setState({
            prevSlide: this.state.currentSlide,
            currentSlide: this.state.currentSlide + 1,

            // this.state.currentSlide > this.props.slides.length + 1
            //   ? 0
            //   :
          });
      },
    },
    {
      id: this.props.id,
      name: 'prevSlide',
      func: () => {
        this.state.currentSlide >= 0 &&
          this.setState({
            prevSlide: this.state.currentSlide,
            currentSlide: this.state.currentSlide - 1,

            // this.state.currentSlide < -1
            //   ? this.props.slides.length - 1
            //   :
          });
      },
    },
  ];

  getContent() {
    if (this.props.slides.length <= 0) {
      return '';
    } else {
      if (this.props.slides[this.state.currentSlide]) {
        return this.props.slides[this.state.currentSlide].content;
      }
      return '';
    }
  }

  changeMenu(index: number) {
    this.setState({ currentSlide: index });
  }

  render() {
    if (this.state.hidden || this.props.slides.length < 1) {
      return '';
    }
    return (
      <div
        id={this.props.id + '-element'}
        className={s.root + ' ' + this.props.carouselContainerStyle}
      >
        {/* <div
          data-id={this.props.id + '-carouselContainerStyle'}
          className={
            s.carouselContainer + ' ' + this.props.carouselContainerStyle
          }
        > */}

        <div
          className={s.backgroundMask + ' ' + this.props.backgroundMaskStyle}
          style={{
            backgroundColor: `${
              this.props.slides[
                this.state.currentSlide === -1
                  ? this.props.slides.length - 1
                  : this.state.currentSlide === this.props.slides.length
                  ? 0
                  : this.state.currentSlide
              ].backgroundColor
            }`,
          }}
        >
          <div className={s.dynamicBg}></div>
        </div>

        <div
          data-id={this.props.id + '-carouselWrapperStyle'}
          className={s.carouselWrapper + ' ' + this.props.carouselWrapperStyle}
        >
          <div
            data-id={this.props.id + '-carouselContentWrapperStyle'}
            className={
              s.carouselContentWrapper +
              ' ' +
              this.props.carouselContentWrapperStyle
            }
          >
            <div
              data-id={this.props.id + '-carouselContentStyle'}
              className={clsx(
                {
                  [s.notAnimation]:
                    (this.state.currentSlide === 0 &&
                      this.state.prevSlide === this.props.slides.length) ||
                    (this.state.currentSlide === this.props.slides.length - 1 &&
                      this.state.prevSlide === -1),
                },
                s.carouselContent + ' ' + this.props.carouselContentStyle,
                `${this.state.currentSlide}`
              )}
              style={{
                transform: `translateX(-${
                  (this.state.currentSlide + 1) * 100
                }%)`,
              }}
            >
              <div
                data-id={this.props.id + '-carouselItemStyle'}
                className={clsx(
                  {},
                  s.carouselItem,
                  this.props.carouselItemStyle
                )}
              >
                {this.props.slides[this.props.slides.length - 1]?.content}
              </div>
              {this.props.slides.map((e, i) => {
                return (
                  <div
                    data-id={this.props.id + '-carouselItemStyle'}
                    className={clsx(
                      {
                        ['active']: this.state.currentSlide === i,
                      },
                      s.carouselItem,
                      this.props.carouselItemStyle
                    )}
                  >
                    {this.props.slides[i].content}
                  </div>
                );
              })}
              <div
                data-id={this.props.id + '-carouselItemStyle'}
                className={clsx(
                  {},
                  s.carouselItem,
                  this.props.carouselItemStyle
                )}
              >
                {this.props.slides[0]?.content}
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
