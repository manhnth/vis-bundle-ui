import * as React from 'react';
import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import s from './SpecialMenu.module.css';
import baseStyles from '../../styles/Base.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  content: React.ReactNode[];
  hiddenAtStart: boolean;
  hideContentWhenClose: boolean;
  hideMenuButton: boolean;
  openButtonImage: Image;
  menuMainCloseBtn: Image;
  toggleOn: (() => void)[];
  toggleOff: (() => void)[];
  menuMainStyle: ClassZone;
  menuMainCloseStyle: ClassZone;
  menuMainContentHolderStyle: ClassZone;
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

export class SpecialMenu extends React.Component<Props, State> {
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

  // renderTheme() {
  //   return (
  //     <React.Fragment>

  //     </React.Fragment>
  //   );
  // }

  render() {
    return (
      <div className={clsx(s.menuWrapper, baseStyles.base)}>
        <div
          className={clsx(
            s.menuMain,
            { [s.active]: !this.state.hidden },
            this.props.menuMainStyle
          )}
        >
          <div className={clsx(s.menuMainClose, this.props.menuMainCloseStyle)}>
            <div
              className={clsx(s.menuMainCloseBtn)}
              onClick={() => {
                this.setState({ hidden: true });
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#icon_chevron-right_412470ca49912)">
                  <path
                    d="M10.856 5.88306L21.1444 16.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M10.856 27.1169L21.1444 16.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="icon_chevron-right_412470ca49912">
                    <rect
                      width="12"
                      height="23"
                      fill="currentColor"
                      transform="translate(10 5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div
            className={clsx(
              s.menuMainContentHolder,
              this.props.menuMainContentHolderStyle
            )}
          >
            {this.props.content}
          </div>
        </div>
        <div
          className={clsx(s.menuMainOpenBtn, {
            [s.hidden]: this.state.hidden === false,
          })}
          onClick={() => {
            this.setState({ hidden: false });
          }}
        >
          <div className={s.menuMainOpenBtnArrow1}>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-path="evenodd"
                d="M13.6959 6.28187C14.0925 6.66621 14.1025 7.2993 13.7181 7.69591C13.3338 8.09252 12.7007 8.10247 12.3041 7.71813L7 2.57812L1.69591 7.71813C1.2993 8.10247 0.666213 8.09252 0.281872 7.69591C-0.10247 7.2993 -0.0925236 6.66621 0.304087 6.28187L6.30116 0.47032C6.4949 0.280845 6.74731 0.185637 7 0.185612C7.25269 0.185637 7.50509 0.280845 7.69883 0.470318L13.6959 6.28187Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={s.menuMainOpenBtnArrow2}>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-path="evenodd"
                d="M13.6959 6.28187C14.0925 6.66621 14.1025 7.2993 13.7181 7.69591C13.3338 8.09252 12.7007 8.10247 12.3041 7.71813L7 2.57812L1.69591 7.71813C1.2993 8.10247 0.666213 8.09252 0.281872 7.69591C-0.10247 7.2993 -0.0925236 6.66621 0.304087 6.28187L6.30116 0.47032C6.4949 0.280845 6.74731 0.185637 7 0.185612C7.25269 0.185637 7.50509 0.280845 7.69883 0.470318L13.6959 6.28187Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
