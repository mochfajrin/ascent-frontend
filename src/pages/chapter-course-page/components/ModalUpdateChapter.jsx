import { Button, Label, Modal, TextInput } from "flowbite-react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { setFormChapter } from "../../../redux/reducers/chapterReducer";
const ModalUpdateChapter = ({ openModal, closeModal, updateChapter }) => {
  const dispatch = useDispatch();
  const [updateValidation, setUpdateValidation] = useState(true);
  const navigate = useNavigate();
  const { courseId } = useParams();

  const { form } = useSelector((state) => state.chapter);

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
              Ganti <span className="text-[#0092A4]">judul bab</span>
            </h3>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="chapterTitle"
                  className="text-[#0092A4] text-md font-semibold"
                  value="Judul bab kelas"
                />
              </div>
              <TextInput
                id="chapterTitle"
                type="text"
                required
                placeholder="ganti judul bab "
                onChange={(e) =>
                  dispatch(
                    setFormChapter({ ...form, chapterTitle: e.target.value })
                  )
                }
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
              <Button onClick={updateChapter} disabled={updateValidation}>
                Simpan
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

ModalUpdateChapter.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addChapter: PropTypes.func.isRequired,
};

export default ModalUpdateChapter;
