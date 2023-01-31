import { render } from '@testing-library/react'
import LectureGroup from '../components/lecture/LectureGroup';
import '@testing-library/jest-dom';

describe('Lecture Group은', () => {
  it('제목을 가지고 있어야 한다.', () => {
    const { getByRole } = render( <LectureGroup /> );

    const lectureTitle = getByRole('heading');
    expect(lectureTitle).toBeInTheDocument();
  });

  it('뱃지를 가지고 있어야 한다.', () => {
    const { getByText } = render( <LectureGroup /> );

    const badge = getByText('Best');
    expect(badge).toBeInTheDocument();
  });
})