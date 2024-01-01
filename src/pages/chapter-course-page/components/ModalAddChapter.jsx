import { Button, Label, Modal, TextInput } from "flowbite-react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { setFormChapter } from "../../../redux/reducers/chapterReducer";
const ModalAddChapter = ({ openModal, closeModal, addChapter }) => {
  const dispatch = useDispatch();

  const { form } = useSelector((state) => state.chapter);

  return (
    <>
      <Modal show={openModal} size="md" onClose={closeModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Tambah <span className="text-[#0092A4]">bab kelas</span>
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
                placeholder="beri judul bab "
                onChange={(e) =>
                  dispatch(
                    setFormChapter({ ...form, chapterTitle: e.target.value })
                  )
                }
              />
            </div>

            <div className="w-full">
              <Button onClick={addChapter}>Simpan</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

ModalAddChapter.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addChapter: PropTypes.func.isRequired,
};

export default ModalAddChapter;
