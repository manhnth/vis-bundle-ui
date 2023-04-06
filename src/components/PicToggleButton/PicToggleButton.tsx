import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import styles from './PicToggleButton.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  offImg: Image;
  onImg: Image;
  turnON: (() => void)[];
  turnOFF: (() => void)[];
  buttonStyle: ClassZone;
}

let defaultProps = {
  offText: 'Off',
  onText: 'On',
};

interface State {
  hidden: boolean;
  on: boolean;
}

export class PicToggleButton extends React.Component<Props, State> {
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
      <span
        id={this.props.id + '-element'}
        className={clsx(styles.root, this.props.buttonStyle)}
        onClick={this.toggle.bind(this)}
      >
        <img src={this.state.on ? this.props.onImg : this.props.offImg} />
      </span>
    );
  }
}
