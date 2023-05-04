import * as React from 'react';
import { ClassZone } from '@viscircle-org/ui-config-common';
import styles from './Accordion.module.css';
import clsx from '../../utils/clsx';
import baseStyles from '../../styles/Base.module.css';

interface Props {
  id: number;
  app: any;
  openAtStart: boolean;
  hide: boolean;
  title: string;
  mainStyle: ClassZone;
  titleStyle: ClassZone;
  headerStyle: ClassZone;
  contentStyle: ClassZone;
  content: React.ReactNode[];
}

let defaultProps = {
  hide: false,
  openAtStart: true,
  title: 'Title',
  hiddenAtStart: false,
  hideContentWhenClose: false,
};

interface State {
  hiddenContent: boolean;
}

export class Accordion extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hiddenContent: !this.props.openAtStart,
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
    if (this.props.hide) {
      return '';
    }
    return (
      <React.Fragment>
        <div
          id={this.props.id + '-element'}
          className={clsx(styles.root, [styles.hide === this.props.hide])}
        >
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
              className={[
                styles.header,
                baseStyles.headlineThree,
                this.props.headerStyle,
              ].join(' ')}
              onClick={(e) => this.click()}
            >
              {this.props.title}
              {/* <div
                className={clsx(styles.toggleBtn)}
                onClick={(e) => this.click()}
              > */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
              </svg>
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
