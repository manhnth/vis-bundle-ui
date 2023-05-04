import * as React from 'react';
import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import styles from './SubMenu.module.css';
import baseStyles from '../../styles/Base.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  submenu: { name: string; content: React.ReactNode[] }[];
  contentHolderStyle: ClassZone;
  navigationHeaderStyle: ClassZone;
  navigationItemStyle: ClassZone;
  navigationItemActiveStyle: ClassZone;
}

let defaultProps = {};

interface State {
  currentSub: number;
  hidden: boolean;
}

export class Submenu extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentSub: 0,
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

  getContent() {
    if (this.props.submenu.length <= 0) {
      return '';
    } else {
      if (this.props.submenu[this.state.currentSub]) {
        return this.props.submenu[this.state.currentSub].content;
      }
      return '';
    }
  }

  changeMenu(index: number) {
    this.setState({ currentSub: index });
  }

  render() {
    if (this.state.hidden) {
      return '';
    }
    return (
      <div id={this.props.id + '-element'} className={styles.root}>
        <div
          data-id={this.props.id + '-navigationHeaderStyle'}
          className={clsx(styles.header, this.props.navigationHeaderStyle)}
        >
          {this.props.submenu.map((e, i) => {
            return (
              <div
                data-id={this.props.id + '-navigationItemStyle'}
                className={clsx(
                  {
                    [styles.headerItemActive]: this.state.currentSub === i,
                  },
                  styles.headerItem,
                  baseStyles.headlineBase,
                  this.props.navigationItemActiveStyle,
                  this.props.navigationItemStyle
                )}
                onClick={() => {
                  this.changeMenu(i);
                }}
              >
                {e.name}
              </div>
            );
          })}
        </div>
        <div
          data-id={this.props.id + '-contentHolderStyle'}
          className={clsx(styles.content, this.props.contentHolderStyle)}
        >
          {this.getContent()}
        </div>
      </div>
    );
  }
}
