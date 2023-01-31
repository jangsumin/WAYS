import { render } from '@testing-library/react'
import LectureItem from '../components/lecture/LectureItem';
import '@testing-library/jest-dom';

describe('Lecture Item은', () => {
  it('썸네일을 가지고 있어야 한다.', () => {
    const { getByAltText } = render( <LectureItem /> );

    const Thumb = getByAltText('초격차 패키지');
    expect(Thumb).toBeInTheDocument();
  });

  it('뱃지를 가지고 있어야 한다.', () => {
    const { getByText } = render( <LectureItem /> );

    const badge = getByText('평생소장');
    expect(badge).toBeInTheDocument();
  });

  it('강의 제목을 렌더링 할 수 있어야 한다.', () => {
    const { getByRole } = render( <LectureItem /> );

    const title = getByRole('heading', {
      name: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영'
    });
    expect(title).toBeInTheDocument();
  });

  it('강의 설명을 렌더링 할 수 있어야 한다.', () => {
    const { getByText } = render( <LectureItem /> );

    const desc = getByText(/hello, world/);
    expect(desc).toBeInTheDocument();
  });
})