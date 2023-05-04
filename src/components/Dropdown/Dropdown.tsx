import { ClassZone, SelectionWrap } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import styles from './Dropdown.module.css';
import baseStyles from '../../styles/Base.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  label: string;
  hideLabel: boolean;
  selectionObject: SelectionWrap<{ name: string }, { name: string }>;
  labelStyle: ClassZone;
  dropdownStyle: ClassZone;
  holderStyle: ClassZone;
}

let defaultProps = {
  label: 'label',
  hideLabel: false,
};

interface State {
  hidden: boolean;
}

export class Dropdown extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

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

  render() {
    if (this.state.hidden) {
      return '';
    }
    return (
      <div
        id={this.props.id + '-element'}
        data-id={this.props.id + '-holderStyle'}
        className={clsx(styles.root, this.props.holderStyle)}
      >
        {this.props.hideLabel ? (
          ''
        ) : (
          <label
            data-id={this.props.id + '-labelStyle'}
            className={clsx(styles.dropdownLabel, this.props.labelStyle)}
          >
            {this.props.label}
          </label>
        )}
        <select
          data-id={this.props.id + '-dropdownStyle'}
          value={
            'a' || this.props.selectionObject?.selection?.currentIndex || 0
          }
          className={[
            styles.dropdown,
            baseStyles.subHeadline,
            this.props.dropdownStyle,
          ].join(' ')}
          onChange={(e) => {
            if (
              this.props.selectionObject &&
              this.props.selectionObject.selection
            ) {
              this.props.selectionObject.selection.onChange(
                parseInt(e.currentTarget.value)
              );
            }
          }}
        >
          {this.props.selectionObject?.selection?.list
            ? this.props.selectionObject.selection.list.map((e, i) => {
                return (
                  <option className={styles.dropdownItem} value={i}>
                    {e[this.props.selectionObject.displayValue?.name] || ''}
                  </option>
                );
              })
            : ''}
        </select>
      </div>
    );
  }
}
