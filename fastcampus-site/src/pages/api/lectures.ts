import type { NextApiRequest, NextApiResponse } from 'next';

const mockCategory = {
  id: 0,
  name: '프로그래밍',
}

const mockTags = [
  {
    id: 0,
    name: '평생소장',
  },
  {
    id: 1,
    name: 'AWS',
  },
  {
    id: 2,
    name: 'DevOps',
  }
]

const lecturesData = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '총 45가지 AWS 서비스와 40가지 DevOps 툴을 150개 실습으로 정복!',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    }
  ]
}

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(lecturesData);
}