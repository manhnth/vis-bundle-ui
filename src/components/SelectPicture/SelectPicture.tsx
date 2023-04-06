import React, { Component } from 'react';
import {
  ClassZone,
  Image,
  SelectionWrap,
} from '@viscircle-org/ui-config-common';
import styles from './SelectPicture.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  label: string;
  hideLabel: boolean;
  selectionObject: SelectionWrap<{ img: string }, { img: Image }>;
  labelStyle: ClassZone;
  itemStyle: ClassZone;
  holderStyle: ClassZone;
  customPictureDisplay: { name: string; image: Image }[];
}

let defaultProps = {
  label: 'label',
  hideLabel: false,
};

interface State {
  hidden: boolean;
}

export class SelectPicture extends React.Component<Props, State> {
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
      <div
        id={this.props.id + '-element'}
        className={clsx(styles.root, this.props.holderStyle)}
      >
        {!this.props.hideLabel && (
          <label
            data-id={this.props.id + '-labelStyle'}
            className={clsx(styles.selectPictureLabel, this.props.labelStyle)}
          >
            {this.props.label}
          </label>
        )}
        <div className={styles.selectPictureItemHolder}>
          {this.props.selectionObject?.selection?.list
            ? this.props.selectionObject.selection.list.map((e, i) => {
                const customImg = this.props.customPictureDisplay?.find(
                  (item) =>
                    item.name === e[this.props.selectionObject.displayValue.img]
                );

                let img =
                  customImg?.image ||
                  e[this.props.selectionObject.displayValue.img];

                return (
                  <div
                    data-id={this.props.id + '-itemStyle'}
                    className={clsx(
                      styles.selectPictureItem,
                      {
                        [styles.selectPictureItemActive]:
                          this.props.selectionObject.selection.currentIndex ===
                          i,
                      },
                      this.props.itemStyle
                    )}
                    onClick={() => {
                      if (this.props.selectionObject) {
                        this.props.selectionObject.selection.onChange(i);
                      }
                    }}
                  >
                    <img src={img} />
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    );
  }
}
