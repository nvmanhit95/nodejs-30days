try {
  async_method('invalid_arguments_generate_error', (err, data) => {
    if (err) {
      throw err;
    }
  });
} catch (err) {
  console.error(err);
}	