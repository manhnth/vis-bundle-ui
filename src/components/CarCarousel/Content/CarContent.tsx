import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import s from './ImageDisplay.module.css';

interface Props {
  id: number;
  app: any;
  hidden: boolean;
  imgCaption: string;
  imgSubCaption: string;
  image: Image;
  imageMobile: Image;
  imageDisplayHolderStyle: ClassZone;
  imgCaptionHolderStyle: ClassZone;
  imgCaptionStyle: ClassZone;
  imgSubCaptionStyle: ClassZone;
  imgStyle: ClassZone;
  imgMobileStyle: ClassZone;
}

let defaultProps = {
  hidden: false,
  imgCaption: 'caption',
  imgSubCaption: 'subCaption',
};

interface State {
  hidden: boolean;
}

export class ImageDisplay extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hidden: this.props.hidden,
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

  render() {
    if (this.state.hidden) {
      return '';
    }
    return (
      <div
        id={this.props.id + '-element'}
        className={s.root + ' ' + this.props.imageDisplayHolderStyle}
      >
        {/* <div
          data-id={this.props.id + '-imgCaptionHolderStyle'}
          className={s.imgCaption + ' ' + this.props.imgCaptionHolderStyle}
        >
          <div data-id={this.props.id + '-imgCaptionStyle'}>
            {this.props.imgCaption}
          </div>
          <div
            data-id={this.props.id + '-imgSubCaptionStyle'}
            className={s.imgSubCaption + ' ' + this.props.imgSubCaptionStyle}
          >
            {this.props.imgSubCaption}
          </div>
        </div> */}
        <img
          data-id={this.props.id + '-imgStyle'}
          className={s.img + ' ' + this.props.imgStyle}
          src={this.props.image}
          alt={this.props.image}
        />
        <img
          data-id={this.props.id + '-imgMobileStyle'}
          className={s.img + ' ' + s.mobile + ' ' + this.props.imgMobileStyle}
          src={this.props.imageMobile || this.props.image}
          alt={this.props.image}
        />
      </div>
    );
  }
}
