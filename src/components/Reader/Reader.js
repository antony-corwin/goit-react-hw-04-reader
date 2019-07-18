import queryString from '../../../node_modules/query-string';
import {
  CSSTransition,
  TransitionGroup,
} from '../../../node_modules/react-transition-group/cjs';
import React, { Component } from '../../../node_modules/react';
import PropTypes from '../../../node_modules/prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import slideTransition from '../../transition/slide.module.css';

const containerStyle = {
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '800px',
};

const getItemFromLocation = location =>
  Number(queryString.parse(location.search).item);

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  componentDidMount() {
    const { location, history } = this.props;
    const item = getItemFromLocation(location);

    if (!item) {
      history.push('/reader?item=1');
    }
  }

  componentDidUpdate() {
    const { location, history, items } = this.props;
    const item = getItemFromLocation(location);
    if (!item || Number(item) > items.length + 1)
      return history.push('/reader?item=1');

    return null;
  }

  handleNext = () => {
    const currentItem = getItemFromLocation(this.props.location);

    this.props.history.push({
      ...this.props.location,
      search: `?item=${currentItem + 1}`,
    });
  };

  handlePrev = () => {
    const currentItem = getItemFromLocation(this.props.location);

    this.props.history.push({
      ...this.props.location,
      search: `?item=${currentItem - 1}`,
    });
  };

  render() {
    const { items, location } = this.props;
    const item = getItemFromLocation(location);
    const lastIndex = items.length;
    const currentPublication = items[item - 1];

    return (
      <>
        {currentPublication ? (
          <TransitionGroup style={containerStyle}>
            <CSSTransition
              classNames={slideTransition}
              timeout={300}
              unmountOnExit
            >
              <>
                <Publication item={currentPublication} />

                <Counter index={item} lastIndex={lastIndex} />
                <Controls
                  currentPage={item}
                  lastPage={lastIndex}
                  onHandlePrev={this.handlePrev}
                  onHandleNext={this.handleNext}
                />
              </>
            </CSSTransition>
          </TransitionGroup>
        ) : (
          <p>Not found publication</p>
        )}
      </>
    );
  }
}
