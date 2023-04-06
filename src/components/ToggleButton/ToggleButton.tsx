import { ClassZone } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import styles from './ToggleButton.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  offText: string;
  onText: string;
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
      <span
        id={this.props.id + '-element'}
        className={clsx(styles.root, this.props.buttonStyle)}
        onClick={this.toggle.bind(this)}
      >
        <a>{this.state.on ? this.props.onText : this.props.offText}</a>
      </span>
    );
  }
}
