import { ClassZone } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import styles from './Button.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  name: string;
  onClick: (() => void)[];
  buttonStyle: ClassZone;
}

let defaultProps = {
  name: 'Button',
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
      <span
        id={this.props.id + '-element'}
        className={clsx(styles.root, this.props.buttonStyle)}
        onClick={this.click.bind(this)}
      >
        <a>{this.props.name}</a>
      </span>
    );
  }
}
