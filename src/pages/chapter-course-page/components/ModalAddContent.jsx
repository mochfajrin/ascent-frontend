import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setFormContent } from "../../../redux/reducers/contentReducer";

const ModalAddContent = ({ openModal, closeModal, addContent }) => {
  const dispatch = useDispatch();

  const { form } = useSelector((state) => state.content);

  return (
    <>
      <Modal show={openModal} size="md" onClose={closeModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Tambah <span className="text-[#0092A4]">konten kelas</span>
            </h3>

            <div className="mb-5">
              <label
                htmlFor="contentTittle"
                className="block mb-2  text-[#0092A4] text-md font-semibold"
              >
                Judul konten : <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                onChange={(e) =>
                  dispatch(
                    setFormContent({ ...form, contentTitle: e.target.value })
                  )
                }
                placeholder="Beri judul konten"
                type="text"
                id="contentTitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0092A4] focus:border-[#0092A4]  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="contentUrl"
                className="block mb-2 text-[#0092A4] text-md font-semibold"
              >
                URL kontent : <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                onChange={(e) =>
                  dispatch(
                    setFormContent({ ...form, contentUrl: e.target.value })
                  )
                }
                placeholder="Beri url kontent"
                type="text"
                id="contentUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0092A4] focus:border-[#0092A4]  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="videoDuration"
                className="block mb-2 text-[#0092A4] text-md font-semibold"
              >
                Durasi video : <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                onChange={(e) =>
                  dispatch(
                    setFormContent({ ...form, videoDuration: e.target.value })
                  )
                }
                placeholder="contoh: 02:40"
                type="text"
                id="videoDuration"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0092A4] focus:border-[#0092A4]  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="w-full">
              <Button onClick={addContent}>Simpan</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

ModalAddContent.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addContent: PropTypes.func.isRequired,
};

export default ModalAddContent;
