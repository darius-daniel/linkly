import { dummyData } from '@/app/lib/definitions';
import Row from './row';

export default function DummyTable() {
  return (
    <>
      <div className="overflow-x-auto rounded-box bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Short Link</th>
              <th>Original Link</th>
              <th>Clicks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((row, idx) => (
              <Row data={row} key={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
