import * as React from 'react';
import { ClassZone, SelectionWrap } from '@viscircle-org/ui-config-common';
import styles from './SelectButton.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  label: string;
  hideLabel: boolean;
  selectionObject: SelectionWrap<{ name: string }, { name: string }>;
  labelStyle: ClassZone;
  itemStyle: ClassZone;
  holderStyle: ClassZone;
}

let defaultProps = {
  label: 'label',
  hideLabel: false,
};

interface State {
  hidden: boolean;
}

export class SelectButton extends React.Component<Props, State> {
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
        {this.props.hideLabel ? (
          ''
        ) : (
          <label
            data-id={this.props.id + '-labelStyle'}
            className={clsx(styles.selectButtonLabel, this.props.labelStyle)}
          >
            {this.props.label}
          </label>
        )}
        <div className={styles.selectButtonItemHolder}>
          {this.props.selectionObject?.selection?.list
            ? this.props.selectionObject.selection.list.map((e, i) => {
                return (
                  <div
                    data-id={this.props.id + '-itemStyle'}
                    className={clsx(
                      styles.selectButtonItem,
                      {
                        [styles.selectButtonItemActive]:
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
                    {e[this.props.selectionObject.displayValue.name]}
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    );
  }
}
