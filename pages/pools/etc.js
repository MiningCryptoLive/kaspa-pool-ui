import PropTypes from "prop-types";
import PoolStats from "../../components/PoolStats";
import { getPoolStats } from "../../api/getPoolStats";

const propTypes = {
  ergoPool: PropTypes.shape({
    coin: PropTypes.shape({
      type: PropTypes.string.isRequired,
    }),
    paymentProcessing: PropTypes.shape({
      minimumPayment: PropTypes.number.isRequired,
      payoutScheme: PropTypes.string.isRequired,
    }),
    networkStats: PropTypes.shape({
      networkHashRate: PropTypes.number.isRequired,
      networkDifficulty: PropTypes.number.isRequired,
    }),
    poolStats: PropTypes.shape({
      connectedMiners: PropTypes.number.isRequired,
      poolHashRate: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

function EtcsoloPool({ etcsoloPool }) {
  return <PoolStats props={etcsoloPool} />;
}

export async function getServerSideProps() {
  try {
    const etcsoloPool = await getPoolStats("etcsolo");
    return {
      props: { etcsoloPool },
    };
  } catch (error) {
    console.log(error);// eslint-disable-line
    return {};
  }
}

EtcsoloPool.propTypes = propTypes;
export default etcsoloPool;
