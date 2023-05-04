import React from 'react';
import { ClassZone, Image } from '@viscircle-org/ui-config-common';
import styles from './LoadingScreen.module.css';

interface Props {
  id: number;
  app: any;
  loadingText: string[];
  img: Image;
  loadIntervalMS: number;
  active: boolean;
  screenStyle: ClassZone;
  imgLoadingStyle: ClassZone;
  textStyle: ClassZone;
}

let defaultProps = {
  loadIntervalMS: 1000,
  active: true,
};

interface State {
  loadingText: string;
}

export class LoadingScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      loadingText: props.loadingText.length > 0 ? props.loadingText[0] : '',
    };
  }

  componentDidMount() {
    setInterval(this.getLoadingText.bind(this), +this.props.loadIntervalMS);
  }

  private index = 0;
  getLoadingText() {
    if (
      !this.props.loadingText ||
      this.props.loadingText.length <= 0 ||
      !this.props.active
    ) {
      return;
    }
    if (this.index >= this.props.loadingText.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
    this.setState({ loadingText: this.props.loadingText[this.index] });
  }

  render() {
    if (this.props.active) {
      return (
        <div
          id={this.props.id + '-element'}
          className={styles.screen + ' ' + this.props.screenStyle}
        >
          <div
            data-id={this.props.id + '-loadingHolder'}
            className={styles.holder}
          >
            {this.props.img ? (
              <img
                data-id={this.props.id + '-loadingImg'}
                className={styles.imgLoading + ' ' + this.props.imgLoadingStyle}
                src={this.props.img}
                alt={this.props.img}
              />
            ) : (
              <div className={styles.spinner}></div>
            )}
            <div
              data-id={this.props.id + '-loadingText'}
              className={styles.text + this.props.textStyle}
            >
              {this.state.loadingText}
            </div>
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
}
