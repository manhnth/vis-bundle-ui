import { ClassZone } from '@viscircle-org/ui-config-common';
import * as React from 'react';
import s from './RangeSlider.module.css';
import clsx from '../../utils/clsx';

interface Props {
  id: number;
  app: any;
  hidden: boolean;
  sliderContainerStyle: ClassZone;
  sliderStyle: ClassZone;
  sliderThumbStyle: ClassZone;
  onChange: (() => void)[];
}

let defaultProps = {
  hidden: false,
};

interface State {
  hidden: boolean;
  rangeValue: number;
}

export class RangeSlider extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hidden: this.props.hidden,
      rangeValue: 0,
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

  private onChange(value: any) {
    this.setState({ rangeValue: value });
    this.props.onChange.forEach((e) => {
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
        className={clsx(s.root, this.props.sliderContainerStyle)}
      >
        <input
          type="range"
          min="0"
          max="100"
          className={clsx(s.slider, this.props.sliderStyle)}
          id="myRange"
          onChange={(e) => this.onChange(e.target.value)}
        />
        <div
          data-id={this.props.id + '-sliderThumbStyle'}
          style={{
            left: `${
              this.state.rangeValue < 101 ? `${this.state.rangeValue}%` : 'auto'
            }`,
            transform: `translateY(-50%) translateX(-${
              this.state.rangeValue * 1.1
            }%)`,
          }}
          className={clsx(s.sliderThumb, this.props.sliderThumbStyle)}
        >
          <span className={s.sliderThumbBackground}></span>
        </div>
      </div>
    );
  }
}
