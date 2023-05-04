import * as React from 'react';
import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import styles from './SubmenuIcon.module.css';
import baseStyles from '../../styles/Base.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  submenu: {
    name: string;
    activeIcon: Image;
    inActiveIcon: Image;
    content: React.ReactNode[];
  }[];
  holderStyle: ClassZone;
  labelStyle: ClassZone;
  navHolderStyle: ClassZone;
  navItemHolderStyle: ClassZone;
  navItemActiveStyle: ClassZone;
  navImgHolderStyle: ClassZone;
  navImgStyle: ClassZone;
  submenuIconContentHolderStyle: ClassZone;
  variants: 'left' | 'right' | 'top' | 'bottom';
}

let defaultProps = {
  variant: 'left',
};

interface State {
  currentSub: number;
  hidden: boolean;
}

export class SubmenuIcon extends React.Component<Props, State> {
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
      <div
        id={this.props.id + '-element'}
        className={clsx(
          styles.root,
          {
            [styles.left]: this.props.variants === 'left',
            [styles.right]: this.props.variants === 'right',
            [styles.top]: this.props.variants === 'top',
            [styles.bottom]: this.props.variants === 'bottom',
          },
          this.props.holderStyle
        )}
      >
        <div
          data-id={this.props.id + '-navigationHolderStyle'}
          className={styles.nav + ' ' + this.props.navHolderStyle}
        >
          {this.props.submenu.map((e, i) => {
            return (
              <div
                data-id={this.props.id + '-navigationItemStyle'}
                className={clsx(
                  styles.navItemHolder,
                  this.props.navItemHolderStyle,
                  {
                    [styles.active]: this.state.currentSub === i,
                    [this.props.navItemActiveStyle]:
                      this.state.currentSub === i,
                  }
                )}
                onClick={() => {
                  this.changeMenu(i);
                }}
              >
                <div
                  className={
                    styles.navImgHolder + ' ' + this.props.navImgHolderStyle
                  }
                >
                  <img
                    className={this.props.navImgStyle}
                    src={
                      this.state.currentSub === i
                        ? e.activeIcon
                        : e.inActiveIcon
                    }
                    alt={e.name}
                  />
                </div>
                <label
                  data-id={this.props.id + '-navItemLabelStyle'}
                  className={
                    styles.navItemLabel +
                    ' ' +
                    baseStyles.captionThree +
                    ' ' +
                    this.props.labelStyle
                  }
                >
                  {e.name}
                </label>
              </div>
            );
          })}
        </div>
        <div
          data-id={this.props.id + '-submenuIconContentHolderStyle'}
          className={clsx(
            styles.content,
            this.props.submenuIconContentHolderStyle
          )}
        >
          {this.getContent()}
        </div>
      </div>
    );
  }
}
