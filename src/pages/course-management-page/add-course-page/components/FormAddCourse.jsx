const FormAddCourse = () => {
  return (
    <div className="flex flex-row justify-between space-x-16  text-base">
      <form className="w-full">
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Kode kelas :
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Nama kelas :
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="countries"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Level kelas :
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Pilih level kelas</option>
            <option value="US">Beginner</option>
            <option value="CA">Advanced</option>
            <option value="CA">Intermediate</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Tentang kelas :
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Grub kelas :
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Beri url grub kelas"
          />
        </div>
      </form>
      <form className="w-full">
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Harga kelas :
          </label>
          <input
            type="number"
            id="base-input"
            min="0"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-3  ">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="default_size"
          >
            Unggah gambar kelas
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="default_size"
            type="file"
          />
          <p
            className="mt-1 text-xs text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, or JPG
          </p>
        </div>
        <div className="mb-5">
          <label
            htmlFor="countries"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Kategori kelas :
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Beri kategori kelas</option>
            <option value={1}>UI/UX Design</option>
            <option value={2}>Web Development</option>
            <option value={3}>Data Science</option>
            <option value={4}>Android Development</option>
            <option value={5}>Product Management</option>
            <option value={6}>IOS Development</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Beri diskon (%) :
          </label>
          <input
            type="number"
            id="base-input"
            min="0"
            max="100"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Beri rating :
          </label>
          <input
            type="number"
            id="base-input"
            min="0"
            max="10"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default FormAddCourse;
