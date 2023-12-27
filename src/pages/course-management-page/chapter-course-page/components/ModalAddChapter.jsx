import { Button, Label, Modal, TextInput } from "flowbite-react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFormChapter } from "../../../../redux/reducers/chapterReducer";

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
              Tambah bab kelas
            </h3>

            <div>
              {/* <div class="mb-5">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div> */}
              <div className="mb-2 block">
                <Label htmlFor="chapterTitle" value="Judul bab kelass" />
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
