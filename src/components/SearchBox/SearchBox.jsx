import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BoxForm, BtnSearch, Input } from './SearchBox.styled';

export default function SearchBar({ onChange }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('queryMovie') ?? '';

  const initialValue = {
    queryMovie: movieName,
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }

    onChange(movieName);
  }, [movieName, onChange]);

  const handleSearchForm = (values, { resetForm }) => {
    const queryMovie = values.queryMovie.trim();
  
    if (queryMovie === '') {
      toast.warning('Name is required');
      return;
    }
  
    if (queryMovie.includes(' ')) {
      toast.warning('Name cannot contain spaces');
      return;
    }
  
    const searchQuery = { queryMovie };
    setSearchParams(searchQuery);
    onChange(queryMovie);
    resetForm();
  };
  
  return (
    <Formik initialValues={initialValue} onSubmit={handleSearchForm}>
      {({ handleSubmit, errors }) => (
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <BoxForm>
            <Input type="text" name="queryMovie" autoFocus placeholder="Search movies" />
            <BtnSearch type="submit">
              <span>Search</span>
            </BtnSearch>
          </BoxForm>
          {errors.queryMovie && toast.error(errors.queryMovie.message)}
        </Form>
      )}
    </Formik>
  );
}