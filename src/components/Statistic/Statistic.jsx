import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import { getRandomColor } from 'utils/getRandomColor';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statlist}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={css.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};