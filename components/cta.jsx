import { ArrowRight, Link } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <div className="bg-black text-white rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Simplify Your Scheduling?
      </h2>
      <p className="text-xl mb-6">
        Join thousands of professionals who trust Schedulrr for efficient time
        management.
      </p>
      <Link href={"/dashboard"}>
        <Button size="lg" variant="secondary" className="text-blue-600">
          Start For Free <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
};

export default CTA;
