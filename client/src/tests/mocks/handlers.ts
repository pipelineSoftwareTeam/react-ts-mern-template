import { http, HttpResponse, delay } from 'msw';
import { v4 as uuidv4 } from 'uuid';

const baseUrl: string = 'http://localhost:3000/';

// Generic Types
type MswGeneric = object;

// Mock GET request
type GetResBody = {
  id: string;
  name: string;
  type: string;
  introduced: number;
};

const getReq = http.get<MswGeneric, MswGeneric, GetResBody | GetResBody[]>(
  `${baseUrl}/guitars`,
  async () =>
    HttpResponse.json([
      {
        id: uuidv4(),
        name: 'Gibson J45',
        type: 'Dreadnought',
        introduced: 1942,
      },
      {
        id: uuidv4(),
        name: 'Martin D28',
        type: 'Dreadnought',
        introduced: 1931,
      },
    ])
);

// Mock POST request
type PostResBody = {
  id: string;
  orderNumber: number;
  guitar: string;
};

const postReq = http.post<MswGeneric, MswGeneric, PostResBody>(
  `${baseUrl}/order`,
  async () => {
    await delay(400);

    return HttpResponse.json(
      { id: uuidv4(), orderNumber: 12345, guitar: 'Eastman E1D' },
      { status: 201 }
    );
  }
);

// Mock Error request
const errorReq = http.get(
  `${baseUrl}/guitars`,
  () => new HttpResponse(null, { status: 401 })
);

const handlers = [getReq, postReq, errorReq];

export default handlers;
