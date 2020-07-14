import config from '../config';

export type TrackInfo = {
  id: number;
  lastSeen: number;
  session: number;
};

class TrackerService {
  private static instance: TrackerService;

  private constructor() {
    // Private constructor
  }

  public static getInstance(): TrackerService {
    if (!TrackerService.instance) {
      TrackerService.instance = new TrackerService();
    }

    return TrackerService.instance;
  }

  public getScript = async (): Promise<TrackInfo> => {
    // const response = await fetchJsonp(`${config.API_URL}/track`);
    // const json = await response.json();

    // return json as TrackInfo;

    const response = await fetch(`${config.API_URL}/track`, {
      mode: 'cors',
      cache: 'force-cache',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/javascript',
      },
    });

    const text = await response.text();

    const regex = /id:\s(\d+),session:\s(\d+),lastSeen:\s(\d+)/gm;
    const regexRes = regex.exec(text);

    if (regexRes) {
      return { id: +regexRes[1], session: +regexRes[2], lastSeen: +regexRes[3] } as TrackInfo;
    } else {
      throw new Error(`Invaild response: ${text}`);
    }
  };
}

export default TrackerService;
