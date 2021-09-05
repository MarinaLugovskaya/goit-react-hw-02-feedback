import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <Section>
      <h1>{title}</h1>
      {children}
    </Section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
