import * as React from 'react';
import { ClassZone, SelectionWrap } from '@viscircle-org/ui-config-common';
import s from './CarCarousel.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  selectionObject: SelectionWrap<
    {
      name: string;
    },
    {
      name: string;
    }
  >;
  carouselContainerStyle: ClassZone;
  backgroundMaskStyle: ClassZone;
  captionHolderStyle: ClassZone;
  subCaptionStyle: ClassZone;
  captionStyle: ClassZone;
  imgBoxStyle: ClassZone;
  imgStyle: ClassZone;
  imgMobileStyle: ClassZone;
}

let defaultProps = {};

interface State {
  currentSlide: number;
  prevSlide: number;
  hidden: boolean;
}

export class CarCarousel extends React.Component<Props, State> {
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
          currentSlide: this.props.selectionObject?.selection?.list?.length - 1,
        });
      }, 500);
    }
    if (
      this.state.currentSlide ===
      this.props.selectionObject?.selection?.list?.length
    ) {
      setTimeout(() => {
        this.setState({
          prevSlide: this.state.currentSlide,
          currentSlide: 0,
        });
      }, 500);
    }
    this.props.selectionObject?.selection?.onChange(
      this.state.currentSlide === -1
        ? this.props.selectionObject.selection.list.length - 1
        : this.state.currentSlide ===
          this.props.selectionObject.selection.list.length
        ? 0
        : this.state.currentSlide
    );
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
        this.state.currentSlide <=
          this.props.selectionObject?.selection?.list?.length - 1 &&
          this.setState({
            prevSlide: this.state.currentSlide,
            currentSlide: this.state.currentSlide + 1,
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
          });
      },
    },
  ];

  getContent() {
    // if (this.props.selectionObject.selection.list.length <= 0) {
    //   return '';
    // } else {
    //   if (this.props.selectionObject.selection.list[this.state.currentSlide]) {
    //     return this.props.selectionObject.selection.list[
    //       this.state.currentSlide
    //     ].content;
    //   }
    //   return '';
    // }
  }

  changeMenu(index: number) {
    this.setState({ currentSlide: index });
  }

  render() {
    if (this.state.hidden || !this.props.selectionObject?.selection?.list) {
      return '';
    }
    if (this.props.selectionObject?.selection?.list.length < 1) {
      return '';
    }

    const selectionList = this.props.selectionObject?.selection.list;

    return (
      <div
        id={this.props.id + '-element'}
        className={s.root + ' ' + this.props.carouselContainerStyle}
      >
        <div
          className={s.backgroundMask + ' ' + this.props.backgroundMaskStyle}
          style={{
            backgroundColor: `${
              this.props.selectionObject.selection.list[
                this.state.currentSlide === -1
                  ? this.props.selectionObject.selection.list.length - 1
                  : this.state.currentSlide ===
                    this.props.selectionObject.selection.list.length
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
          className={s.carouselWrapper + ' '}
        >
          <div
            data-id={this.props.id + '-carouselContentWrapperStyle'}
            className={s.carouselContentWrapper + ' '}
          >
            <div
              data-id={this.props.id + '-carouselContentStyle'}
              className={clsx(
                {
                  [s.notAnimation]:
                    (this.state.currentSlide === 0 &&
                      this.state.prevSlide === selectionList.length) ||
                    (this.state.currentSlide === selectionList.length - 1 &&
                      this.state.prevSlide === -1),
                },
                s.carouselContent + ' '
              )}
              style={{
                transform: `translateX(-${
                  (this.state.currentSlide + 1) * 100
                }%)`,
              }}
            >
              {/* a copy of first slide to get smooth transition*/}
              <div
                data-id={this.props.id + '-carouselItemStyle'}
                className={s.carouselItem + ' '}
              >
                <div
                  data-id={this.props.id + '-captionHolderStyle'}
                  className={
                    s.captionHolder + ' ' + this.props.captionHolderStyle
                  }
                >
                  <div
                    data-id={this.props.id + '-subCaptionStyle'}
                    className={s.subCaption + ' ' + this.props.subCaptionStyle}
                  >
                    {selectionList[selectionList.length - 1].sub_caption}
                  </div>
                  <div
                    data-id={this.props.id + '-CaptionStyle'}
                    className={s.caption + ' ' + this.props.captionStyle}
                  >
                    {selectionList[selectionList.length - 1].caption}
                  </div>
                </div>
                <img
                  data-id={this.props.id + '-imgStyle'}
                  className={s.img + ' ' + this.props.imgStyle}
                  src={selectionList[selectionList.length - 1]?.img}
                  alt={''}
                />
                <img
                  data-id={this.props.id + '-imgMobileStyle'}
                  className={
                    s.img + ' ' + s.mobile + ' ' + this.props.imgMobileStyle
                  }
                  src={
                    selectionList[selectionList.length - 1].img_mobile ||
                    selectionList[selectionList.length - 1].img
                  }
                  alt={''}
                />
              </div>

              {this.props.selectionObject.selection.list.map((e, i) => {
                return (
                  <div
                    data-id={this.props.id + '-carouselItemStyle'}
                    className={clsx(
                      {
                        ['active']: this.state.currentSlide === i,
                      },
                      s.carouselItem
                    )}
                  >
                    <div
                      data-id={this.props.id + '-captionHolderStyle'}
                      className={
                        s.captionHolder + ' ' + this.props.captionHolderStyle
                      }
                    >
                      <div
                        data-id={this.props.id + '-subCaptionStyle'}
                        className={
                          s.subCaption + ' ' + this.props.subCaptionStyle
                        }
                      >
                        {e.sub_caption}
                      </div>
                      <div
                        data-id={this.props.id + '-CaptionStyle'}
                        className={s.caption + ' ' + this.props.captionStyle}
                      >
                        {e.caption}
                      </div>
                    </div>
                    <img
                      data-id={this.props.id + '-imgStyle'}
                      className={s.img + ' ' + this.props.imgStyle}
                      src={e.img}
                      alt={e.img}
                    />
                    <img
                      data-id={this.props.id + '-imgMobileStyle'}
                      className={
                        s.img + ' ' + s.mobile + ' ' + this.props.imgMobileStyle
                      }
                      src={e.img_mobile || e.img}
                      alt={e.img}
                    />
                  </div>
                );
              })}

              {/* a copy of last slide */}
              <div
                data-id={this.props.id + '-carouselItemStyle'}
                className={s.carouselItem}
              >
                <div
                  data-id={this.props.id + '-captionHolderStyle'}
                  className={
                    s.captionHolder + ' ' + this.props.captionHolderStyle
                  }
                >
                  <div
                    data-id={this.props.id + '-subCaptionStyle'}
                    className={s.subCaption + ' ' + this.props.subCaptionStyle}
                  >
                    {selectionList[0].sub_caption}
                  </div>
                  <div
                    data-id={this.props.id + '-CaptionStyle'}
                    className={s.caption + ' ' + this.props.captionStyle}
                  >
                    {selectionList[0].caption}
                  </div>
                </div>
                <img
                  data-id={this.props.id + '-imgStyle'}
                  className={s.img + ' ' + this.props.imgStyle}
                  src={selectionList[0]?.img}
                  alt={''}
                />
                <img
                  data-id={this.props.id + '-imgMobileStyle'}
                  className={
                    s.img + ' ' + s.mobile + ' ' + this.props.imgMobileStyle
                  }
                  src={selectionList[0].img_mobile || selectionList[0].img}
                  alt={''}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
