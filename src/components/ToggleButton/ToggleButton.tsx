import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import s from './ToggleButton.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  onText: string;
  offText: string;
  onImage: Image;
  offImage: Image;
  turnON: (() => void)[];
  turnOFF: (() => void)[];
  buttonStyle: ClassZone;
  buttonLabelStyle: ClassZone;
  buttonImageStyle: ClassZone;
}

let defaultProps = {
  offText: 'Off',
  onText: 'On',
};

interface State {
  hidden: boolean;
  on: boolean;
}

export class ToggleButton extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      on: true,
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

  private toggle() {
    let b = !this.state.on;

    if (b) {
      this.props.turnON.forEach((e) => {
        e();
      });
    } else {
      this.props.turnOFF.forEach((e) => {
        e();
      });
    }
    this.setState({ on: b });
  }

  render() {
    if (this.state.hidden) {
      return '';
    }
    return (
      <div
        id={this.props.id + '-element'}
        className={clsx(s.root, this.props.buttonStyle)}
        onClick={this.toggle.bind(this)}
      >
        {this.props.onImage && (
          <div
            data-id={this.props.id + '-buttonImageStyle'}
            className={clsx(s.buttonImage, this.props.buttonImageStyle)}
          >
            <img
              src={this.state.on ? this.props.onImage : this.props.offImage}
              alt="button_image"
            />
          </div>
        )}
        <span
          data-id={this.props.id + '-buttonLabelStyle'}
          className={this.props.buttonLabelStyle}
        >
          {this.state.on ? this.props.onText : this.props.offText}
        </span>
      </div>
    );
  }
}
