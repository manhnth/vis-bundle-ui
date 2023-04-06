import * as React from 'react';
import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import styles from './Menu.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  content: React.ReactNode[];
  hiddenAtStart: boolean;
  hideContentWhenClose: boolean;
  hideMenuButton: boolean;
  openButtonImage: Image;
  closeButtonImage: Image;
  toggleOn: (() => void)[];
  toggleOff: (() => void)[];
  menuStyle: ClassZone;
  menuHiddenStyle: ClassZone;
  contentHolderStyle: ClassZone;
  buttonStyle: ClassZone;
  variants: 'vertical-left' | 'vertical-right' | 'horizontal';
}

let defaultProps = {
  hiddenAtStart: false,
  hideContentWhenClose: false,
  hideMenuButton: false,
};

interface State {
  hidden: boolean;
  hideContent: boolean;
}

export class Menu extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hidden: this.props.hiddenAtStart ? this.props.hiddenAtStart : false,
      hideContent: this.props.hiddenAtStart && this.props.hideContentWhenClose,
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
      name: 'close',
      func: () => {
        this.setState({ hidden: true });
      },
    },
    {
      id: this.props.id,
      name: 'open',
      func: () => {
        this.setState({ hidden: false });
      },
    },
  ];

  private click(b: boolean) {
    if (!b) {
      this.props.toggleOff.forEach((e) => {
        e();
      });
      if (this.props.hideContentWhenClose) {
        this.setState({ hideContent: true });
      }
    } else {
      this.props.toggleOn.forEach((e) => {
        e();
      });
      this.setState({ hideContent: false });
    }
  }

  //   getMenuColor(): string {
  //     if (this.props.themes === 'light') {
  //       return styles.menuColorLight;
  //     } else {
  //       return styles.menuColorDark;
  //     }
  //   }

  renderTheme() {
    return (
      <React.Fragment>
        <div
          id={this.props.id + '-element'}
          className={clsx(
            styles.menu,
            {
              [styles.menuHor]: this.props.variants === 'horizontal',
              [styles.menuVer]: this.props.variants !== 'horizontal',
              [styles.left]: this.props.variants === 'vertical-left',
              [styles.right]: this.props.variants === 'vertical-right',
              [styles.hidden]: this.state.hidden,
            },
            this.props.menuStyle,
            this.props.menuHiddenStyle
          )}
        >
          <div
            key="main-component"
            data-id={this.props.id + '-contentHolderStyle'}
            className={clsx(
              styles.specialHolderHori,
              this.props.contentHolderStyle
            )}
          >
            <div
              className={styles.menuItemsHolder}
              style={this.state.hideContent ? { display: 'none' } : {}}
            >
              {this.props.content}
            </div>
            {!this.props.hideMenuButton && (
              <span
                data-id={this.props.id + '-buttonStyle'}
                className={clsx(
                  styles.menuBtn,
                  {
                    [styles.menuBtnHor]: this.props.variants === 'horizontal',
                    [styles.menuBtnVerLeft]:
                      this.props.variants === 'vertical-left',
                    [styles.menuBtnVerRight]:
                      this.props.variants === 'vertical-right',
                  },
                  this.props.buttonStyle
                )}
                onClick={() => {
                  let b = !this.state.hidden;
                  this.setState({ hidden: b });
                  this.click(!b);
                }}
              >
                {this.state.hidden ? (
                  <img
                    src={
                      this.props.openButtonImage
                        ? this.props.openButtonImage
                        : ''
                    }
                  />
                ) : (
                  <img
                    src={
                      this.props.closeButtonImage
                        ? this.props.closeButtonImage
                        : ''
                    }
                  />
                )}
              </span>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return <div className={clsx(styles.root)}>{this.renderTheme()}</div>;
  }
}
