import { Button, Label, Modal, TextInput } from "flowbite-react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormContent } from "../../../../redux/reducers/contentReducer";

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
              Tambah konten kelas
            </h3>

            <div className="mb-5">
              <label
                htmlFor="contentTittle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="contentUrl"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="videoDuration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Durasi video : <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                onChange={(e) =>
                  dispatch(
                    setFormContent({ ...form, videoDuration: e.target.value })
                  )
                }
                placeholder="contoh: 02.40"
                type="text"
                id="videoDuration"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            {/* <div className="mb-2 block">
                <Label htmlFor="chapterTitle" value="Judul bab kelass" />
              </div>
              <TextInput
                id="chapterTitle"
                type="text"
                required
                placeholder="beri judul bab "
                onChange={(e) =>
                  dispatch(
                    setFormContent({ ...form, chapterTitle: e.target.value })
                  )
                }
              /> */}

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
