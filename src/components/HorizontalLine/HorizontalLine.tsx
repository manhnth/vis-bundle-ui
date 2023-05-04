import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import s from './HorizontalLine.module.css';

interface Props {
  id: number;
  app: any;
  singleBorderStyle: ClassZone;
}

let defaultProps = {};

interface State {
  hidden: boolean;
}

export class HorizontalLine extends React.Component<Props, State> {
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
    if (this.state.hidden) {
      return '';
    }
    return (
      <hr
        id={this.props.id + '-element'}
        className={s.root + ' ' + this.props.singleBorderStyle}
      />
    );
  }
}
