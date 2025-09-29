// src/hooks/useFaq.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getFaqs, createFaq, updateFaq, deleteFaq } from "../api/faqApi";

// Fetch all FAQs
export const useFaqs = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: getFaqs,
  });
};

// Create FAQ
export const useCreateFaq = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createFaq,
    onSuccess: () => {
      queryClient.invalidateQueries(["faqs"]); // refetch FAQs after adding
    },
  });
};

// Update FAQ
export const useUpdateFaq = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, faq }) => updateFaq(id, faq),
    onSuccess: () => {
      queryClient.invalidateQueries(["faqs"]);
    },
  });
};

// Delete FAQ
export const useDeleteFaq = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteFaq,
    onSuccess: () => {
      queryClient.invalidateQueries(["faqs"]);
    },
  });
};
