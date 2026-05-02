import Image from "next/image";
import { Star } from "lucide-react";

export const SocialProof = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 py-4">
            <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                        <Image
                            src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=f1f5f9`}
                            alt={`Happy Customer ${i}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
            <div>
                <div className="flex text-yellow-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                </div>
                <p className="text-sm font-medium text-gray-700">Trusted by 500+ families</p>
            </div>
        </div>
    );
};
