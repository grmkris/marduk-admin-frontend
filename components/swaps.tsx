import React, {useEffect} from 'react';
import DataTable from 'react-data-table-component';

export interface SwapProps {
  id: string;
  keyIndex: number;
  redeemScript: string;
  fee: number;
  routingFee: number;
  minerFee: number;
  pair: string;
  orderSide: number;
  status: string;
  failureReason: string;
  preimageHash: string;
  invoice: string;
  acceptZeroConf: boolean;
  timeoutBlockHeight: number;
  rate: number;
  expectedAmount: number;
  onchainAmount: number;
  lockupAddress: string;
  lockupTransactionId: string;
  lockupTransactionVout: number;
};

const Swaps = (props : { swaps: SwapProps[] }) => {

  useEffect(() => {
    console.log(props.swaps);
  }, [])


  const columns = [
    {
      name: 'Id',
      selector: (row: SwapProps) => row.id,
      maxWidth: '30px',
      sortable: true,
    },
    {
      name: 'Fee',
      selector: (row: SwapProps) => row.fee,
      maxWidth: '30px',
      sortable: true,
    },
    {
      name: 'Routing fee',
      selector: (row: SwapProps) => row.routingFee,
      maxWidth: '30px',
      sortable: true,
    },
    {
      name: 'Miner fee',
      selector: (row: SwapProps) => row.routingFee,
      maxWidth: '30px',
      sortable: true,
    },
    {
      name: 'Pair',
      selector: (row: SwapProps) => row.pair,
      sortable: true,
      maxWidth: '30px',
    },
    {
      name: 'Onchain Amount',
      selector: (row: SwapProps ) => row.onchainAmount,
      maxWidth: '150px',
      sortable: true,
    },
    {
      name: 'Transaction Id',
      selector: (row: SwapProps) => row.lockupTransactionId,
      maxWidth: '150px',
      sortable: true,
    },
    {
      name: 'Expected Amount',
      selector: (row: SwapProps) => row.expectedAmount,
      maxWidth: '150px',
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row: SwapProps) => row.status,
      maxWidth: '150px',
      sortable: true,
    },
    {
      name: 'Timeout Block Height',
      selector: (row: SwapProps) => row.timeoutBlockHeight,
      maxWidth: '150px',
      sortable: true,
    }
  ];

  const conditionalRowStyles = [
    {
      when: (row:SwapProps) => row.status.includes('claim'),
      style: {
        backgroundColor: '#2ea65a',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    }
  ];


  return (
  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
    <div className="flex items-center justify-between mb-4">
      <div className="flex-shrink-0">
        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Swaps</span>
        <h3 className="text-base font-normal text-gray-500">Recent swaps</h3>
      </div>
    </div>
    <DataTable dense pagination columns={columns} data={props.swaps} highlightOnHover conditionalRowStyles={conditionalRowStyles}/>
  </div>

  );
};

export default Swaps;