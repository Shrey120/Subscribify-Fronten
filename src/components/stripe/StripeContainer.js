import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "../payment-card/PaymentCard";

const PUBLIC_KEY =
  "pk_test_51NdCYxSERmmQORdUn0z3ZPr2UAKV1UibQ2wrvVcCAxfNLzCnAPfvTptZnKVK4WE2g5MCoiwcPhncQImwZTMen48j00lZ6rPofp";
const stripePromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCard />
    </Elements>
  );
}
