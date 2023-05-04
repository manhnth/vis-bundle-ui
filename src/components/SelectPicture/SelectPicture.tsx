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
  onClick: (() => void)[];
  holderStyle: ClassZone;
  labelStyle: ClassZone;
  holderItemsStyle: ClassZone;
  itemStyle: ClassZone;
  activeItemStyle: ClassZone;
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

  private click() {
    this.props.onClick.forEach((e) => {
      e();
    });
  }

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
        <div
          className={clsx(
            styles.selectPictureItemHolder,
            this.props.holderItemsStyle
          )}
        >
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
                    onClick={() => {
                      this.props.selectionObject.selection.onChange(i);
                      this.click.bind(this);
                    }}
                    className={clsx(
                      styles.selectPictureItem,
                      {
                        [styles.selectPictureItemActive]:
                          this.props.selectionObject.selection.currentIndex ===
                          i,
                      },
                      this.props.itemStyle,
                      {
                        [this.props.activeItemStyle]:
                          this.props.selectionObject.selection.currentIndex ===
                          i,
                      }
                    )}
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
