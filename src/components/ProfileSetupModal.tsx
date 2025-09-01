import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const profileSchema = z.object({
  artisan_name: z.string().min(2, 'Name must be at least 2 characters'),
  business_name: z.string().optional(),
  craft_type: z.string().min(2, 'Craft type is required'),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  location: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  heritage_story: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface ProfileSetupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export function ProfileSetupModal({ open, onOpenChange, onSuccess }: ProfileSetupModalProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      artisan_name: '',
      business_name: '',
      craft_type: '',
      bio: '',
      location: '',
      website: '',
      heritage_story: '',
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    setLoading(true);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('No authenticated user');
      }

      const { error } = await supabase
        .from('profiles')
        .upsert({
          user_id: user.id,
          ...data,
        });

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your artisan profile has been successfully set up!",
      });

      onSuccess();
      onOpenChange(false);
      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Set Up Your Artisan Profile</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="artisan_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Artisan Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="business_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your business name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="craft_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Craft Type *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Pottery, Weaving, Woodwork" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="City, Country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about yourself and your craft..."
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="heritage_story"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Heritage Story</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share your cultural heritage and how it influences your craft..."
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input placeholder="https://your-website.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save Profile'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}