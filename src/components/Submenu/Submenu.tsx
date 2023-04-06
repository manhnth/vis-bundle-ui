import * as React from 'react';
import { ClassZone } from '@viscircle-org/ui-config-common';
import styles from './Submenu.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  openAtStart: boolean;
  content: React.ReactNode[];
  title: string;
  titleStyle: ClassZone;
  headerStyle: ClassZone;
  mainStyle: ClassZone;
  contentStyle: ClassZone;
}

let defaultProps = {
  openAtStart: true,
  title: 'Title',
  hiddenAtStart: false,
  hideContentWhenClose: false,
};

interface State {
  hiddenContent: boolean;
}

export class Submenu extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hiddenContent: this.props.openAtStart ? false : this.props.openAtStart,
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
        this.setState({ hiddenContent: true });
      },
    },
    {
      id: this.props.id,
      name: 'open',
      func: () => {
        this.setState({ hiddenContent: false });
      },
    },
  ];

  private click() {
    this.setState({ hiddenContent: !this.state.hiddenContent });
  }

  render() {
    return (
      <React.Fragment>
        <div id={this.props.id + '-element'} className={clsx(styles.root)}>
          <div
            data-id={this.props.id + '-mainStyle'}
            className={clsx(
              styles.main,
              { [styles.active]: this.state.hiddenContent === false },
              this.props.mainStyle
            )}
          >
            <div
              data-id={this.props.id + '-headerStyle'}
              className={clsx(styles.header, this.props.headerStyle)}
            >
              <div
                data-id={this.props.id + '-titleStyle'}
                className={clsx(styles.title, this.props.titleStyle)}
              >
                {this.props.title}
                <span
                  className={clsx(styles.toggleBtn)}
                  onClick={(e) => this.click()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                  >
                    <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
                  </svg>
                </span>
              </div>
            </div>
            <div
              data-id={this.props.id + '-contentStyle'}
              className={clsx(styles.content, this.props.contentStyle)}
            >
              {this.props.content}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
