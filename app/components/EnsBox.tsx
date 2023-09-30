import { useEnsName } from "wagmi";

interface InforCardProps {
  objectName: string;
  address: string;
}

export default function EnsBar({ objectName, address }: InforCardProps) {
  const ensName = useEnsName({ address: address as `0x${string}`, chainId: 1 });

  if (ensName.isLoading) {
    // TODO: Should be a skeleton load
    return (
      <>
        <div className="ml-4 font-bold">{objectName}</div>
        <div className="bg-gray-300 rounded mt-1 m-4">
          <p className="truncate text-mg p-4 hover:bg-gray-400 hover:rounded">
            Fetching data...
          </p>
        </div>
      </>
    );
  }

  if (ensName.isError || !ensName.data) {
    return <></>;
  }

  return (
    <>
      <div className="ml-4 font-bold">{objectName}</div>
      <div className="bg-gray-300 rounded mt-1 m-4">
        <a href={`https://app.ens.domains/${ensName.data}`}>
          <p className="truncate text-mg p-4 hover:bg-gray-400 hover:rounded">
            {ensName.data}
          </p>
        </a>
      </div>
    </>
  );
}
