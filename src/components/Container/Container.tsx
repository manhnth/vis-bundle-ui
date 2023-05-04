import s from './Container.module.css';
import * as React from 'react';
import { ClassZone } from '@viscircle-org/ui-config-common';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  hide: boolean;
  // show: boolean;
  content: React.ReactNode[];
  containerStyle: ClassZone;
}

let defaultProps = {
  hide: false,
  // show: true,
};

interface State {
  hidden: boolean;
}

export class Container extends React.Component<Props, State> {
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

  render() {
    // if (this.props.hide) {
    //   return '';
    // }
    // if (this.state.hidden) {
    //   return '';
    // }
    // if (this.props.show)
    return (
      <div
        id={this.props.id + '-element'}
        className={clsx(s.container + ' ' + this.props.containerStyle, {
          [s.hide]: this.props.hide || this.state.hidden,
        })}
      >
        {this.props.content}
      </div>
    );
  }
}
