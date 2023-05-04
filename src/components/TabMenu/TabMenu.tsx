import * as React from 'react';
import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import s from './TabMenu.module.css';
import baseStyles from '../../styles/Base.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  tabMenu: { name: string; content: React.ReactNode[] }[];
  tabMenuHolderStyle: ClassZone;
  tabMenuHeaderStyle: ClassZone;
  tabMenuItemStyle: ClassZone;
  tabMenuItemActiveStyle: ClassZone;
  tabMenuContentStyle: ClassZone;
}

let defaultProps = {};

interface State {
  currentSub: number;
  hidden: boolean;
}

export class TabMenu extends React.Component<Props, State> {
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
    if (this.props.tabMenu.length <= 0) {
      return '';
    } else {
      if (this.props.tabMenu[this.state.currentSub]) {
        return this.props.tabMenu[this.state.currentSub].content;
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
      <div
        id={this.props.id + '-element'}
        className={s.root + ' ' + this.props.tabMenuHolderStyle}
      >
        <div
          data-id={this.props.id + '-tabMenuHeaderStyle'}
          className={s.tabMenuHeader + ' ' + this.props.tabMenuHeaderStyle}
        >
          {this.props.tabMenu.map((e, i) => {
            return (
              <div
                data-id={this.props.id + '-tabMenuItemStyle'}
                className={clsx(
                  s.tabMenuHeaderItem,
                  {
                    [s.tabMenuHeaderItemActive]: this.state.currentSub === i,
                  },
                  baseStyles.headlineBase,
                  this.props.tabMenuItemStyle,
                  this.props.tabMenuItemActiveStyle
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
          data-id={this.props.id + '-tabMenuContentStyle'}
          className={clsx(s.tabMenuContent, this.props.tabMenuContentStyle)}
        >
          {this.getContent()}
        </div>
      </div>
    );
  }
}
