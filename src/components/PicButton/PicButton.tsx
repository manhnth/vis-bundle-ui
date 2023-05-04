import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import s from './PicButton.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  isNotActive: boolean;
  hideAtStart: boolean;
  image: Image;
  useAnimation: boolean;
  // optionImage: Image;
  variants:
    | 'animation-to-left'
    | 'animation-to-right'
    | 'animation-to-up'
    | 'animation-to-down';
  onClick: (() => void)[];
  buttonStyle: ClassZone;
  buttonActiveStyle: ClassZone;
  imagesHolderStyle: ClassZone;
  imageBoxStyle: ClassZone;
  imgStyle: ClassZone;
}

let defaultProps = {
  useAnimation: false,
  hideAtStart: false,
  isNotActive: true,
};

interface State {
  hidden: boolean;
}

export class PicButton extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hidden: this.props.hideAtStart ? true : false,
    };
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
  ];

  private click() {
    this.props.onClick.forEach((e) => {
      e();
    });
  }

  render() {
    if (this.state.hidden) {
      return '';
    }
    return (
      <div
        id={this.props.id + '-element'}
        className={clsx(
          s.root,
          {
            [s.animation]: this.props.useAnimation,
            [s.toUp]: this.props.variants === 'animation-to-up',
            [s.toLeft]: this.props.variants === 'animation-to-left',
            [s.toRight]: this.props.variants === 'animation-to-right',
            [s.toDown]: this.props.variants === 'animation-to-down',
            [s.active]: !this.props.isNotActive,
            [this.props.buttonActiveStyle]: !this.props.isNotActive,
          },
          this.props.buttonStyle
        )}
        onClick={this.click.bind(this)}
      >
        <div className={s.buttonsBox + ' ' + this.props.imagesHolderStyle}>
          <div
            className={s.btnImgBox + ' ' + s.first + this.props.imageBoxStyle}
          >
            <img
              className={s.img + '' + this.props.imgStyle}
              src={this.props.image}
              alt="Pic_Button_One"
            />
          </div>
          <div
            className={s.btnImgBox + ' ' + s.second + this.props.imageBoxStyle}
          >
            <img
              className={s.img + ' ' + this.props.imgStyle}
              src={
                // this.props.optionImage
                //   ? this.props.optionImage
                //   :
                this.props.image
              }
              alt="Pic_Button_Option"
            />
          </div>
        </div>
      </div>
    );
  }
}
