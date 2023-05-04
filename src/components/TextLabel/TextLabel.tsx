import { ClassZone } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import styles from './TextLabel.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  hidden: boolean;
  inputText: string;
  textStyle: ClassZone;
}

let defaultProps = {
  hidden: false,
  inputText: 'input text',
};

interface State {
  hidden: boolean;
}

export class TextLabel extends React.Component<Props, State> {
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
        className={clsx(styles.root, this.props.textStyle)}
      >
        {this.props.inputText}
      </div>
    );
  }
}
