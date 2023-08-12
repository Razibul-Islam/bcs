import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Canceled = () => {
  const [modal, setModal] = useState("hidden");
  const [favorite, setFavorite] = useState(false);
  return (
    <div>
      <div className="border border-teal-600 rounded-md p-5 bg-neutral-300/30">
        <h1 className="text-xl font-semibold mb-2">
          <span>01.</span>ছন্দের জাদুকর বলা হয় কোন কবিকে?
        </h1>
        <ul className="space-y-1 text-base">
          <li className="py-2 px-2">ক) সত্যেন্দ্রনাথ দত্ত</li>
          <li className="bg-red-500 py-2 px-2">খ) কৃষ্ণচন্দ্র মজুমদার</li>
          <li className="py-2 px-2">গ) হেমচন্দ্র বন্দ্যোপাধ্যায়</li>
          <li className="bg-green-500 py-2 px-2">ঘ) রবীন্দ্রনাথ ঠাকুর</li>
        </ul>
        <div className="space-x-3 mt-3">
          <Link className="border border-teal-600 py-1 px-4 rounded-full">
            {favorite ? (
              <FavoriteBorderIcon onClick={() => setFavorite(!favorite)} />
            ) : (
              <FavoriteIcon onClick={() => setFavorite(!favorite)} />
            )}
          </Link>
          <Link
            onClick={() => setModal("block")}
            className="border border-teal-600 py-1 px-4 rounded-full"
          >
            ব্যাখ্যা
          </Link>
        </div>
      </div>

      {/* modal  */}
      <div
        className={`relative z-10 ${modal}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div>
                  <p className="text-lg font-semibold">Explanation</p>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus unde nam expedita nesciunt voluptate odio cumque,
                    illo asperiores sit placeat suscipit voluptas. Dolores,
                    maxime quisquam dignissimos enim modi minima nulla velit eos
                    quibusdam recusandae provident quos, impedit doloremque
                    tempora aliquam ratione praesentium consequatur error
                    libero? Commodi excepturi totam quod iusto mollitia repellat
                    maxime blanditiis laboriosam sapiente voluptatem cupiditate
                    assumenda odit culpa incidunt eos, officiis nostrum
                    accusantium consectetur vero voluptates beatae, possimus
                    reiciendis atque! Nisi alias aspernatur a libero totam?
                    Nulla eos cupiditate, asperiores ut unde eius non, sunt
                    ipsum repellat aspernatur optio. Sint numquam explicabo
                    dolorum esse illo. Nemo, adipisci!
                  </div>
                  <div className="flex justify-end items-center gap-5 mt-5">
                    <label
                      onClick={() => setModal("hidden")}
                      className="px-4 py-1 text-white uppercase rounded-sm bg-red-500 cursor-pointer"
                    >
                      Cancel
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canceled;
