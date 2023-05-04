import s from './BackgroundMask.module.css';
import * as React from 'react';
import { ClassZone } from '@viscircle-org/ui-config-common';

interface Props {
  id: number;
  app: any;
  hide: boolean;
  content: React.ReactNode[];
  rootStyle: ClassZone;
}

let defaultProps = {
  hide: false,
};

interface State {
  hidden: boolean;
}

export class BackgroundMask extends React.Component<Props, State> {
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
    if (this.props.hide) {
      return '';
    }
    return (
      <div className={s.root + ' ' + this.props.rootStyle}>
        <div className={s.dynamicBg}></div>
      </div>
    );
  }
}
