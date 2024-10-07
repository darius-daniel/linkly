import { dummyData } from '@/app/lib/definitions';
import { sfProDisplayBold } from '../fonts';
import Row from './row';

export default function DummyTable() {
  return (
    <>
      <table className="lg:w-4/5 lg:mx-auto flex flex-col divide-y-4 divide-custom-black gap text-xs text-custom-lite">
        <thead
          className={`${sfProDisplayBold.className} py-3 px-4 bg-custom-dark-gray rounded-t-2xl text-sm`}
        >
          <tr className="flex flex-row justify-between">
            <td className="lg:hidden">Shorten Links</td>
            <td className="max-lg:hidden w-1/4">Short Link</td>
            <td className="max-lg:hidden w-1/4">Original Link</td>
            <td className="max-lg:hidden w-1/6">Clicks</td>
            <td className="max-lg:hidden w-1/6">Status</td>
            <td className="max-lg:hidden w-1/6">Date</td>
          </tr>
        </thead>
        <tbody className="flex flex-col divide-y-4 divide-custom-black bg-custom-dark-gray-transparent px-2">
          {dummyData.map((row, idx) => (
            <Row data={row} key={idx} />
          ))}
        </tbody>
      </table>
    </>
  );
}
