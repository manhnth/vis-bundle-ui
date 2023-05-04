import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import s from './Button.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  image: Image;
  name: string;
  isActive: boolean;
  onClick: (() => void)[];
  buttonStyle: ClassZone;
  buttonActiveStyle: ClassZone;
  buttonImageStyle: ClassZone;
  buttonLabelStyle: ClassZone;
}

let defaultProps = {
  name: 'Button',
  isActive: false,
};

interface State {
  hidden: boolean;
}

export class Button extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
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
        className={clsx(s.root, this.props.buttonStyle, {
          [s.buttonActive]: this.props.isActive,
          [this.props.buttonActiveStyle]: this.props.isActive,
        })}
        onClick={this.click.bind(this)}
      >
        {this.props.image && (
          <div
            data-id={this.props.id + '-buttonImageStyle'}
            className={clsx(s.buttonImage, this.props.buttonImageStyle)}
          >
            <img src={this.props.image} alt="button_image" />
          </div>
        )}
        <span
          data-id={this.props.id + '-buttonLabelStyle'}
          className={clsx(s.buttonLabel, this.props.buttonLabelStyle)}
        >
          {this.props.name}
        </span>
      </div>
    );
  }
}
