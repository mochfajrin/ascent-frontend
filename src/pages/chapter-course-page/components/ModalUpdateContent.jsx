import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormContent } from "../../../redux/reducers/contentReducer";

const ModalUpdateContent = ({ openModal, closeModal, updateContent }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { form } = useSelector((state) => state.content);
  const [updateValidation, setUpdateValidation] = useState(true);
  const { courseId } = useParams();

  const validationTogle = () => {
    setUpdateValidation(false);
    if (updateValidation === false) {
      setUpdateValidation(true);
    }
  };

  const closeModalToggle = () => {
    setUpdateValidation(true);
    closeModal();
    navigate(`/dashboard/course-management/chapter-course/${courseId}`);
  };

  return (
    <>
      <Modal show={openModal} size="md" onClose={closeModalToggle} popup>
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
            <div className="space-y-2">
              <h1>Apakah anda yakin ingin menyimpan perubahan ?</h1>
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  onClick={validationTogle}
                  className="w-4 h-4 text-[#0092A4] bg-gray-100 border-gray-300 rounded focus:ring-[#0092A4] focus:border-[#0092A4] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Iya, saya yakin
                </label>
              </div>
            </div>
            <div className="w-full">
              <Button onClick={updateContent} disabled={updateValidation}>
                Simpan
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

ModalUpdateContent.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  updateContent: PropTypes.func.isRequired,
};

export default ModalUpdateContent;
