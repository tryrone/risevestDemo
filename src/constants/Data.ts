import {Path as RePath} from 'react-native-redash';
import gaussian from 'gaussian';

export type DataPoint = {
  date: Date;
  value: number;
};
export type GraphData = {
  max: number;
  min: number;
  curve: RePath;
  mostRecent: any;
};

export const originalData: DataPoint[] = [
  {date: new Date('2000-02-01T05:00:00.000Z'), value: 250},
  {date: new Date('2000-02-02T05:00:00.000Z'), value: 300.35},
  {date: new Date('2000-02-03T05:00:00.000Z'), value: 150.84},
  {date: new Date('2000-02-04T05:00:00.000Z'), value: 500.92},
  {date: new Date('2000-02-05T05:00:00.000Z'), value: 200.8},
  {date: new Date('2000-02-06T05:00:00.000Z'), value: 150.47},
  {date: new Date('2000-02-07T05:00:00.000Z'), value: 1000.47},
  {date: new Date('2000-02-08T05:00:00.000Z'), value: 200.47},
  {date: new Date('2000-02-09T05:00:00.000Z'), value: 1500.47},
  {date: new Date('2000-02-10T05:00:00.000Z'), value: 83.8},
  {date: new Date('2000-02-11T05:00:00.000Z'), value: 100.47},
  {date: new Date('2000-02-12T05:00:00.000Z'), value: 1000.47},
  {date: new Date('2000-02-13T05:00:00.000Z'), value: 200.47},
  {date: new Date('2000-02-14T05:00:00.000Z'), value: 500.47},
  {date: new Date('2000-02-15T05:00:00.000Z'), value: 600.47},
];

function weightedRandom(mean: number, variance: number): number {
  var distribution = gaussian(mean, variance);
  // Take a random sample using inverse transform sampling method.
  return distribution.ppf(Math.random());
}

export function generateRandomGraphData(length: number): DataPoint[] {
  return Array<number>(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(
        new Date(2000, 0, 1).getTime() + 1000 * 60 * 60 * 24 * index,
      ),
      value: weightedRandom(10, Math.pow(index + 1, 2)),
    }));
}

export function generateSinusGraphData(length: number): DataPoint[] {
  return Array<number>(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(index),
      value: Math.sin(index),
    }));
}

// export const animatedData: DataPoint[] = [
//   {date: '2000-02-01T05:00:00.000Z', value: 500},
//   {date: '2000-02-02T05:00:00.000Z', value: 400.0},
//   {date: '2000-02-03T05:00:00.000Z', value: 300.0},
//   {date: '2000-02-04T05:00:00.000Z', value: 400.0},
//   {date: '2000-02-05T05:00:00.000Z', value: 500.0},
//   {date: '2000-02-06T05:00:00.000Z', value: 1000.98},
//   {date: '2000-02-07T05:00:00.000Z', value: 500.0},
//   {date: '2000-02-08T05:00:00.000Z', value: 200.0},
//   {date: '2000-02-09T05:00:00.000Z', value: 1300.75},
//   {date: '2000-02-10T05:00:00.000Z', value: 400.0},
//   {date: '2000-02-11T05:00:00.000Z', value: 500.0},
//   {date: '2000-02-12T05:00:00.000Z', value: 900.98},
//   {date: '2000-02-13T05:00:00.000Z', value: 600.0},
//   {date: '2000-02-14T05:00:00.000Z', value: 250.0},
//   {date: '2000-02-15T05:00:00.000Z', value: 330.67},
// ];

// export const animatedData2: DataPoint[] = [
//   {date: '2000-02-01T05:00:00.000Z', value: 250},
//   {date: '2000-02-02T05:00:00.000Z', value: 300.0},
//   {date: '2000-02-03T05:00:00.000Z', value: 400.0},
//   {date: '2000-02-04T05:00:00.000Z', value: 100.0},
//   {date: '2000-02-05T05:00:00.000Z', value: 100.0},
//   {date: '2000-02-06T05:00:00.000Z', value: 700.0},
//   {date: '2000-02-07T05:00:00.000Z', value: 1300.11},
//   {date: '2000-02-08T05:00:00.000Z', value: 900.0},
//   {date: '2000-02-09T05:00:00.000Z', value: 100.0},
//   {date: '2000-02-10T05:00:00.000Z', value: 100.0},
//   {date: '2000-02-11T05:00:00.000Z', value: 100.0},
//   {date: '2000-02-12T05:00:00.000Z', value: 700.0},
//   {date: '2000-02-13T05:00:00.000Z', value: 1100.11},
//   {date: '2000-02-14T05:00:00.000Z', value: 900.0},
//   {date: '2000-02-15T05:00:00.000Z', value: 100.96},
// ];

// export const animatedData3: DataPoint[] = [
//   {date: '2000-02-01T05:00:00.000Z', value: 250},
//   {date: '2000-02-02T05:00:00.000Z', value: 600.0},
//   {date: '2000-02-03T05:00:00.000Z', value: 350.0},
//   {date: '2000-02-04T05:00:00.000Z', value: 900.0},
//   {date: '2000-02-05T05:00:00.000Z', value: 80.0},
//   {date: '2000-02-06T05:00:00.000Z', value: 1000.76},
//   {date: '2000-02-07T05:00:00.000Z', value: 300.0},
//   {date: '2000-02-08T05:00:00.000Z', value: 100.0},
//   {date: '2000-02-09T05:00:00.000Z', value: 900.0},
//   {date: '2000-02-10T05:00:00.000Z', value: 900.0},
//   {date: '2000-02-11T05:00:00.000Z', value: 80.0},
//   {date: '2000-02-12T05:00:00.000Z', value: 1000.76},
//   {date: '2000-02-13T05:00:00.000Z', value: 300.0},
//   {date: '2000-02-14T05:00:00.000Z', value: 100.0},
//   {date: '2000-02-15T05:00:00.000Z', value: 900.53},
// ];
